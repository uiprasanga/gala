# Jersey Images Setup Guide

## How to Add Jersey Images to the Shop Page

### 1. Create Jersey Images Folder
Create a folder structure in your `public` directory:
```
public/
└── jersey/
    ├── osimhen.jpg
    ├── icardi.jpg
    ├── sane.jpg
    └── torreira.jpg
```

### 2. Image Requirements
- **Format**: JPG or PNG
- **Size**: Recommended 400x600 pixels (2:3 ratio)
- **Style**: Red Galatasaray jerseys with player numbers
- **Quality**: High resolution for good display

### 3. Image Sources
You can get jersey images from:
- Official Galatasaray merchandise photos
- Stock photo websites
- Create custom jersey mockups
- Use placeholder images for development

### 4. Current Image Paths in Code
The shop page is configured to use these image paths:
- `/jersey/osimhen.jpg` - Victor Osimhen jersey
- `/jersey/icardi.jpg` - Mauro Icardi jersey  
- `/jersey/sane.jpg` - Leroy Sané jersey
- `/jersey/torreira.jpg` - Lucas Torreira jersey

### 5. Fallback Design
If images are not available, the page will show:
- Red gradient background
- Player number overlay
- Flag icon
- Professional placeholder design

### 6. Testing
After adding images:
1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/shop`
3. Check that jersey images display correctly
4. Test responsive design on different screen sizes

### 7. Image Optimization
For better performance:
- Compress images to reduce file size
- Use WebP format if possible
- Consider multiple sizes for responsive design
- Add proper alt text for accessibility

### 8. Alternative: Use Sample Images
If you don't have specific jersey images, you can:
- Use generic red jersey images
- Create mockups with player names
- Use placeholder services like:
  - `https://via.placeholder.com/400x600/DC2626/FFFFFF?text=Osimhen+9`
  - `https://via.placeholder.com/400x600/DC2626/FFFFFF?text=Icardi+10`

### 9. Quick Setup Commands
```bash
# Create jersey folder
mkdir -p public/jersey

# Download sample images (if you have them)
# Place your jersey images in public/jersey/ folder
```

The shop page will automatically display the jersey images once they are placed in the correct folder structure. 