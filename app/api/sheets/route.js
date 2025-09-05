// app/api/sheets/route.js (App Router)
// or pages/api/sheets.js (Pages Router)

import { google } from "googleapis";

// Initialize Google Sheets API
// async function getGoogleSheetsInstance() {
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });
//   return sheets;
// }

//custome function for production and devlopement
async function getGoogleSheetsInstance() {
  try {
    // Use individual environment variables (most reliable for deployment)
    const credentials = {
      // type: process.env.GOOGLE_SHEETS_TYPE,
      // project_id: process.env.GOOGLE_SHEETS_PROJECTID,
      // private_key_id: process.env.GOOGLE_SHEETS_PRIVATEKEYID,
      // private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      // client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      // client_id: process.env.GOOGLE_SHEETS_CLIENTID,
      // auth_uri: process.env.GOOGLE_SHEETS_AUTHURL,
      // token_uri: process.env.GOOGLE_SHEETS_TOKENURL,
      // auth_provider_x509_cert_url: process.env.GOOGLE_SHEETS_CERTURL,
      // client_x509_cert_url: process.env.GOOGLE_SHEETS_509_CERTURL,
      // universe_domain: process.env.GOOGLE_SHEETS_UNIVERSALDOMAIN,




       type: "service_account",
      project_id: "excelsheet-471009",
      private_key_id: "f8d9a1aabe3778ee749b05b361c54d32d9cb7794",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnUaFGXgxjBe/n\n+gmX5nvU9h3TbUbpol+3z1qwOHRmGLKy/ORidalekCS5X8crPhNT8l+NvxXcv72y\njT0ebo8OCJafnR3HIxVzcmuGhcWzPmCk3I4ziaEXi6i6RFE4zkEyhU3w4UAGjtv8\nddb8EKjUFz94UjYvE2a653rV93vtsUbm8qPuRD4WknAkCSoNGvzcQ9jSxVHE9CYU\nun66U3FWhvvGB4/1gqKMJkeoq4eXdPrVOTvTK2AVr6vplFE9ioD3jIC3Kq1xH7rg\nrZcGTqgUv+Q/SWGf/whZi/rifSL7yZq7y0JiuznAewctT80CQ2ZNkLY9mljadj2b\nnTVTmKqlAgMBAAECggEAFI6e9fpQI0pzc1jxHMygokWq3HMspz/f6sF7LvOAuZqH\nOh6AIOi76nZjTLNL0TBLR6EbxFqZ4Qld0TYxMC/9O4gqmWnAYtsYo5qHQ3vkEmWz\nkg3XGtXqCO6LyHbkU8pjkEV4kgPazfN3a8k+pLGXTJeeoLXZGmeT05rlKKzDeSx/\n4jM4f3IkDP8GpqkSJq8KY2BsYgBGZj60h91LSGH8bpnPc/ByQUj0Xy+euNDw7BAG\nO0j/dHwLiSqdaTqT7Cy3LEhgsknYI/JETJ2xJ0Wg6HqOdRgrGQ19s/DRBM8WBj7B\n14lm3eFyvxjZjY0+RqaL31FJwoRp7yaRuHokmcNj8QKBgQDP6VghSlPFFGySvBHb\nzAC07p9ADwd6ShZvjLEMgboMSy++t58tH7mICXI+ZmJC7vg6jtF4SX4dqkPTsDaJ\nT6OnM/2RF0CukIlYBR+9xMPPHWuxAZVSuCAF5Z5wI6aaVszzHhZ7DE12AyoT9OLY\nRbF+P6LFwnnmFdeiqoU5CAb/5wKBgQDOBMD1RBgKJAFgmG2NFfP3u3J/gdhH8sFk\nbEFNaigOrMeYLxgydETKYwmQLQ8YPiPpPy5STm4Nuze/r0GjmO3+Ox2X6t2VI6iQ\na9Ui/GYWtJR036OFAtAre/ylJVYgMVyKa5+3+PJCYwk0ITDvhp9OfzQ7ZGu4eRAE\nJPwZrNtfkwKBgQCGKKtOp/iQFlLNCIB5lRTrq4KlQk1v8rixeFaSnG8iGa4QYcpb\nwrnkdzv52fUT/cG9f4TZGos/tyuXQICgb/xJGzpG0ntRaUDGxF+sA3jaf8CK8luZ\niehYBcgL0mVh+Bq90i9tbQ3a1cXkJMPwDGCw930gIRKpjnSbqW7X0z85BwKBgFPn\nhbqeH/hJT7JKght6vGDBm9EoTbCHwpGmsTXZLTVE0wk87OrnhXizuxpX75TdAf0l\nuTTWMmYvQHY151K8nvjylIvhoJrz6dvfvu8/wkgvBWNQDaXHTobXOT79JMV5tQm+\n6U6g+fFlqkLr3aU/u7PZhKlHrcN0srwtX+sJBlM3AoGBAKLKbnuVBngS1cbEAA3U\nEFAwdUVLTsB54vWWrgEmYNMRHtLZ0ctC8qP1GzI0qIs0aSa+GWKVT+9wdCeX5iIC\nnPkpSCe+UIfzzpwkKjkfh0Z+LcDabnYnVAxYk38vNWle4nQ1u/ve3ecEu/LmP8Dy\nja/3xqtyZEYYysXHkA41Wgi8\n-----END PRIVATE KEY-----\n",
      client_email: "data-store@excelsheet-471009.iam.gserviceaccount.com",
      client_id: "106233424024357103634",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/data-store%40excelsheet-471009.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    // Validate required fields
    if (!credentials.private_key || !credentials.client_email) {
      throw new Error("Missing required Google credentials");
    }

    // console.log("Using individual environment variables");
    // console.log("Client email:", credentials.client_email);
    // console.log("Private key length:", credentials.private_key.length);
    // console.log(
    //   "Private key starts with:",
    //   credentials.private_key.substring(0, 50)
    // );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets:", error);
    throw error;
  }
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
