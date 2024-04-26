import type { Metadata } from "next";
import "./globals.css";
// import fs from 'fs';
// import path from 'path';

export const metadata: Metadata = {
  title: "Branding Pool",
  description: "BRANDS WITH A FUTURE",
};

// export const getPortfolioItems = () => {
//   const directoryPath = path.join(process.cwd(), 'public', 'portfolio');

//   // Get the list of project folders
//   const projectFolders = fs.readdirSync(directoryPath, { withFileTypes: true })
//     .filter((dirent) => dirent.isDirectory())
//     .map((dirent) => dirent.name);

//   // Get the filenames for each project
//   const projectImages: any = {};
//   for (const projectName of projectFolders) {
//     const projectDir = path.join(directoryPath, projectName);
//     const imageFiles = fs.readdirSync(projectDir)
//       .filter((fileName) => fileName.endsWith('.jpg'));
//     projectImages[projectName] = imageFiles;
//   }
//   return projectImages;
// }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
