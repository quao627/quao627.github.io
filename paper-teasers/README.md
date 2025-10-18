# Paper Teaser Images

This folder contains teaser images for research papers displayed on the website.

## Image Specifications

- **Recommended Size**: 400 x 225 pixels (16:9 aspect ratio)
- **Formats**: PNG, JPG, SVG
- **File Naming**: Use descriptive names (e.g., `mem1.png`, `sparkle.jpg`)

## How to Add a Paper Image

1. **Create/Export your teaser image** (400x225px recommended)
2. **Save it to this folder** with a descriptive name
3. **Update `data/publications.js`** with the image path:

```javascript
{
    title: "Your Paper Title",
    image: "paper-teasers/your-image.png",
    // ... other fields
}
```

## Placeholder Image

If you don't have a teaser image yet, use the placeholder:

```javascript
image: "paper-teasers/placeholder.svg"
```

The placeholder displays a generic research paper icon.

## Tips for Great Teaser Images

- **Keep it simple**: One clear visual or diagram
- **High contrast**: Ensure readability on both light and dark backgrounds
- **Text minimal**: Avoid small text that won't be readable
- **Consistent style**: Use similar design language across all papers
- **Optimize file size**: Keep images under 100KB for fast loading

## Examples

Good teaser images typically include:
- Key architecture diagram
- Main result visualization
- Representative example
- Abstract illustration of the concept

