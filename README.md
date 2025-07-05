# 🚀 Portfolio Website - Nada Fitria Muyassarah

Portfolio website modern dan responsif yang menampilkan skills, projects, dan pengalaman saya sebagai student developer.

## ✨ Fitur Utama

- **Design Modern**: Interface yang clean dan profesional dengan dark/light mode
- **Fully Responsive**: Optimal di desktop, tablet, dan mobile
- **Interactive Elements**: Animations, hover effects, dan smooth scrolling
- **Performance Optimized**: Fast loading dan SEO friendly
- **Accessibility**: Mendukung screen readers dan keyboard navigation

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantic markup dan struktur yang baik
- **CSS3**: Modern styling dengan CSS Grid, Flexbox, dan Custom Properties
- **JavaScript (ES6+)**: Interaktivitas dan dynamic content
- **Font Awesome**: Icons yang konsisten
- **Google Fonts**: Typography yang modern (Inter & Poppins)

## 📁 Struktur File

```
fortofolio/
├── index.html              # File HTML utama
├── assets/
│   ├── css/
│   │   ├── style.css       # Styling utama
│   │   └── responsive.css  # Responsive design
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Gambar dan assets
├── includes/               # Komponen yang dapat digunakan ulang
└── README.md              # Dokumentasi ini
```

## 🎨 Sections Website

### 1. **Navigation**
- Fixed navbar dengan smooth scrolling
- Mobile hamburger menu
- Theme toggle (dark/light mode)
- Active link highlighting

### 2. **Hero Section**
- Personal introduction dengan typing effect
- Profile card dengan social links
- Call-to-action buttons
- Parallax background effect

### 3. **About Section**
- Personal bio dan background
- Statistics showcase
- Education information
- Professional journey

### 4. **Skills Section**
- Technical skills dengan progress bars
- Categorized skills (Programming, Web, Tools)
- Interactive skill cards
- Animated skill levels

### 5. **Projects Section**
- Featured projects showcase
- Project cards dengan hover effects
- Technology tags
- Live demo dan GitHub links

### 6. **Contact Section**
- Contact form dengan validation
- Contact information
- Social media links
- Location dan education details

### 7. **Footer**
- Copyright information
- Quick navigation links
- Made with love message

## 🚀 Cara Menjalankan

1. **Clone repository** (jika menggunakan Git):
   ```bash
   git clone [repository-url]
   cd fortofolio
   ```

2. **Buka file index.html** di browser:
   - Double click file `index.html`
   - Atau drag file ke browser window

3. **Untuk development server** (opsional):
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js
   npx serve .
   
   # Menggunakan PHP
   php -S localhost:8000
   ```

## 🎯 Customization

### Mengubah Informasi Personal

1. **Edit `index.html`**:
   - Ganti nama, title, dan description
   - Update social media links
   - Modify project information

2. **Update CSS variables** di `assets/css/style.css`:
   ```css
   :root {
       --primary-color: #2563eb;    /* Warna utama */
       --secondary-color: #f59e0b;  /* Warna sekunder */
       --accent-color: #10b981;     /* Warna aksen */
   }
   ```

3. **Modify JavaScript** di `assets/js/main.js`:
   - Update contact form handling
   - Modify animations
   - Change console welcome message

### Menambah Projects Baru

1. **Copy project card template**:
   ```html
   <div class="project-card">
       <div class="project-image">
           <img src="assets/images/projects/[project-name].jpg" alt="[Project Name]">
       </div>
       <div class="project-content">
           <h3>[Project Name]</h3>
           <p>[Project Description]</p>
           <div class="project-tech">
               <span class="tech-tag">[Technology]</span>
           </div>
           <div class="project-links">
               <a href="[GitHub URL]" target="_blank" class="btn btn-small">
                   <i class="fab fa-github"></i> View Code
               </a>
               <a href="[Live Demo URL]" class="btn btn-small btn-secondary">Live Demo</a>
           </div>
       </div>
   </div>
   ```

2. **Add project image** ke `assets/images/projects/`

### Menambah Skills Baru

1. **Add skill card** di section skills:
   ```html
   <div class="skill-card">
       <i class="[Font Awesome Icon]"></i>
       <h4>[Skill Name]</h4>
       <div class="skill-level">
           <div class="skill-bar" data-level="[Percentage]"></div>
       </div>
   </div>
   ```

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## 🌙 Dark Mode

Website mendukung dark mode dengan:
- Automatic theme detection
- Manual toggle button
- Persistent theme preference
- Smooth transitions

## ⚡ Performance Features

- **Lazy loading** untuk images
- **Debounced scroll events**
- **Optimized animations**
- **Minified CSS/JS** (untuk production)
- **Image optimization**

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags dan descriptions
- Open Graph tags
- Structured data
- Fast loading times

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Blue)
- **Secondary**: #f59e0b (Orange)
- **Accent**: #10b981 (Green)
- **Background**: #ffffff / #0f172a
- **Text**: #1f2937 / #f8fafc

### Typography
- **Headings**: Poppins (600 weight)
- **Body**: Inter (400 weight)
- **Code**: JetBrains Mono

### Spacing
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem

## 🚀 Deployment

### GitHub Pages
1. Push code ke GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Website akan live di `https://username.github.io/repository-name`

### Netlify
1. Drag folder ke Netlify dashboard
2. Atau connect dengan GitHub repository
3. Automatic deployment dari Git

### Vercel
1. Import project dari GitHub
2. Automatic deployment
3. Custom domain support

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Contact

- **GitHub**: [@sarahhhndfm](https://github.com/sarahhhndfm)
- **LinkedIn**: [Nada Fitria Muyassarah](https://linkedin.com/in/nada-fitria-muyassarah-7b3379305)
- **Twitter**: [@SarahRa871857](https://x.com/SarahRa871857)

## 🙏 Acknowledgments

- Font Awesome untuk icons
- Google Fonts untuk typography
- Unsplash untuk stock images
- Community untuk inspirasi dan feedback

---

**Made with ❤️ in Indonesia**

*"Creating the future, one line of code at a time"* ✨ 