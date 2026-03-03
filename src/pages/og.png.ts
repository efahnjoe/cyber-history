import type { APIRoute } from "astro";
import { readdirSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
// import { generateOgImageForSite } from "@/utils/generateOgImages";

// export const GET: APIRoute = async () => {
//   const buffer = await generateOgImageForSite();
//   return new Response(new Uint8Array(buffer), {
//     headers: { "Content-Type": "image/png" },
//   });
// };

const OG_DIR = resolve(process.cwd(), "./public/og-images");

function findLatestOgImage(dir: string): string | null {
  try {
    const files = readdirSync(dir);

    const ogFiles = files
      .filter(file => /^og-v\d+\.png$/.test(file))
      .map(file => {
        const version = parseInt(
          file.match(/^og-v(\d+)\.png$/)?.[1] || "0",
          10
        );
        return { file, version };
      })
      .sort((a, b) => b.version - a.version);

    if (ogFiles.length === 0) return null;

    return join(dir, ogFiles[0].file);
  } catch (error) {
    console.error("Failed to read OG images directory:", error);
    return null;
  }
}

export const GET: APIRoute = async () => {
  const latestOgPath = findLatestOgImage(OG_DIR);

  if (!latestOgPath) {
    return new Response("No OG image found", { status: 404 });
  }

  try {
    const buffer = readFileSync(latestOgPath);
    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("Failed to read OG image file:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
