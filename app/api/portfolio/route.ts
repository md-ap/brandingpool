import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
    const directoryPath = path.join(process.cwd(), 'public', 'portfolio');

    try {
        // Get the list of project folders
        const projectFolders = fs.readdirSync(directoryPath, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        // Get the filenames for each project
        const projectImages: Record<string, string[]> = {};
        for (const projectName of projectFolders) {
            const projectDir = path.join(directoryPath, projectName);
            const imageFiles = fs.readdirSync(projectDir)
                .filter((fileName) => fileName.endsWith('.jpg') || fileName.endsWith('.webp'))
                .map((imageName) => `${projectName}/${imageName}`);
            projectImages[projectName] = imageFiles;
        }

        // Convert the object into an array of arrays
        const result = Object.values(projectImages).map((imageFiles) => imageFiles.map((imageName) => imageName));
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching portfolio items:', error);
        return NextResponse.error();
    }
}
