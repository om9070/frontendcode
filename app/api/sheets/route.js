// app/api/sheets/route.js (App Router)
// or pages/api/sheets.js (Pages Router)

import { google } from "googleapis";

// Initialize Google Sheets API
async function getGoogleSheetsInstance() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

// GET: Read data from sheet
export async function GET(request) {
  try {
    const sheets = await getGoogleSheetsInstance();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:Z", // Adjust range as needed
    });

    const rows = response.data.values || [];

    // Convert to objects using first row as headers
    if (rows.length > 0) {
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index] || "";
        });
        return obj;
      });

      return Response.json({ success: true, data });
    }

    return Response.json({ success: true, data: [] });
  } catch (error) {
    console.error("Error reading from sheet:", error);
    return Response.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}

// POST: Add new row to sheet
export async function POST(request) {
  try {
    const body = await request.json();
    const { Name, Email, Message } = body;

    if (!Name || !Email || !Message) {
      return Response.json(
        { success: false, error: "Name and Email are required" },
        { status: 400 }
      );
    }

    const sheets = await getGoogleSheetsInstance();

    // Add timestamp
    // const timestamp = new Date().toISOString();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "RAW",
      resource: {
        values: [[Name, Email, Message]],
      },
    });

    return Response.json({
      success: true,
      message: "My Team will Connect You Soon...",
      data: { Name, Email, Message },
    });
  } catch (error) {
    console.error("Error writing to sheet:", error);
    return Response.json(
      { success: false, error: "Failed to add data" },
      { status: 500 }
    );
  }
}

// PUT: Update existing row
export async function PUT(request) {
  try {
    const body = await request.json();
    const { rowIndex, name, email } = body;

    if (!rowIndex || !name || !email) {
      return Response.json(
        { success: false, error: "Row index, name and email are required" },
        { status: 400 }
      );
    }

    const sheets = await getGoogleSheetsInstance();

    const timestamp = new Date().toISOString();

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Sheet1!A${rowIndex + 1}:C${rowIndex + 1}`, // +1 because sheets are 1-indexed
      valueInputOption: "RAW",
      resource: {
        values: [[name, email, timestamp]],
      },
    });

    return Response.json({
      success: true,
      message: "Data updated successfully",
      data: { name, email, timestamp },
    });
  } catch (error) {
    console.error("Error updating sheet:", error);
    return Response.json(
      { success: false, error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a row
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const rowIndex = parseInt(searchParams.get("rowIndex"));

    if (!rowIndex) {
      return Response.json(
        { success: false, error: "Row index is required" },
        { status: 400 }
      );
    }

    const sheets = await getGoogleSheetsInstance();

    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 0, // First sheet
                dimension: "ROWS",
                startIndex: rowIndex, // 0-indexed
                endIndex: rowIndex + 1,
              },
            },
          },
        ],
      },
    });

    return Response.json({
      success: true,
      message: "Row deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting from sheet:", error);
    return Response.json(
      { success: false, error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
