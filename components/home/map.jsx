import React from 'react'


export default function Map() {
    return (
        <div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                    src="https://maps.google.com/maps?q=24.663245654710924,83.98586470292071&z=15&output=embed"
                    width="100%"
                    height="400vh"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                />

            </div>
        </div>
    )
}
