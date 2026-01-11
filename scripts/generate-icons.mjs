import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const srcAppDir = './src/app';

async function generate() {
    try {
        console.log('Generating favicons...');

        // 1. favicon-16.png
        await sharp(path.join(publicDir, 'appicon.svg'))
            .resize(16, 16)
            .png()
            .toFile(path.join(publicDir, 'favicon-16.png'));
        console.log('✓ Created favicon-16.png');

        // 2. favicon-32.png
        await sharp(path.join(publicDir, 'appicon.svg'))
            .resize(32, 32)
            .png()
            .toFile(path.join(publicDir, 'favicon-32.png'));
        console.log('✓ Created favicon-32.png');

        // 3. apple-touch-icon.png (usually 180x180)
        await sharp(path.join(publicDir, 'tiquetaire_icon.svg'))
            .resize(180, 180)
            .png()
            .toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('✓ Created apple-touch-icon.png');

        // 4. favicon.ico (We'll use a 32x32 PNG for this as it's widely supported)
        // To be strictly correct, we overwrite the existing one in src/app if it exists
        const icoPath = path.join(srcAppDir, 'favicon.ico');
        await sharp(path.join(publicDir, 'appicon.svg'))
            .resize(32, 32)
            .png()
            .toFile(icoPath);
        console.log('✓ Updated src/app/favicon.ico');

    } catch (error) {
        console.error('Error generating icons:', error);
    }
}

generate();
