# Our Clients Section - Logo Setup Guide

## Overview
The "Our Clients" section displays a marquee slider of client logos between the Hero section and the Overview section on the homepage.

## Current Status
The component is currently using **text-based placeholders** for client logos. This allows the section to display immediately while you prepare actual client logos.

## How to Add Real Client Logos

### Step 1: Prepare Your Logo Images
- **Format**: PNG or SVG (PNG recommended for photos, SVG for vector logos)
- **Size**: Approximately 140x60 pixels (or similar aspect ratio)
- **Background**: Transparent or white background
- **Quality**: High resolution for crisp display

### Step 2: Add Logo Files
Place your client logo files in the following directory:
```
public/assets/img/clients/
```

Example file names:
- `google.png`
- `microsoft.png`
- `amazon.png`
- etc.

### Step 3: Update the Component
Edit the file: `src/components/OurClients.js`

Find the `clients` array (around line 7) and update it with your logo paths:

```javascript
const clients = [
  { name: "Google", logo: "/assets/img/clients/google.png" },
  { name: "Microsoft", logo: "/assets/img/clients/microsoft.png" },
  { name: "Amazon", logo: "/assets/img/clients/amazon.png" },
  // Add more clients as needed
];
```

### Step 4: Customize Stats (Optional)
You can update the statistics shown below the client logos by editing the stats section in the same file (around line 68).

## Features
- ✅ Auto-scrolling marquee slider
- ✅ Pause on hover
- ✅ Smooth grayscale-to-color transition on hover
- ✅ Responsive design (mobile & desktop)
- ✅ Client statistics section
- ✅ Professional card-based layout

## Customization Options

### Change Scroll Speed
In `OurClients.js`, find the Marquee component and adjust the `speed` prop:
```javascript
<Marquee gradient={true} gradientColor="white" speed={50} pauseOnHover={true}>
```

### Modify Card Styling
Update the className in the client card div to change appearance:
```javascript
className="mx-8 lg:mx-12 flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
```

### Update Section Title
Change the title in the section header:
```javascript
<h2 className='title text-center mx-auto'>
  Our <span className="text-accent">Clients</span>
</h2>
```

## Tips for Best Results
1. Use consistent logo sizes for a uniform appearance
2. Ensure logos have transparent backgrounds for the grayscale effect to work properly
3. Optimize images for web (compress without losing quality)
4. Test on both light and dark backgrounds
5. Consider using SVG format for logos that scale perfectly

## Need Help?
If you encounter any issues or need to customize further, refer to the component file at:
`src/components/OurClients.js`
