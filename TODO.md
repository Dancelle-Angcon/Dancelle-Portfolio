# Portfolio outcomes

## Project gallery update
- [x] Use the newly supplied archive’s actual graphic-design artwork on the Projects page, not placeholder images: the Brew Haven banner ad, Instagram post, landing-page banner, newsletter header, plus the Caelum badge, horizontal mark, icon, and vertical mark.
- [x] Give the artwork concise descriptive titles and working previews/open-artwork links; retain supplied original images and PSD working files in the local portfolio package.
- [x] Keep project search/category/type filtering useful for the new artwork, and preserve the existing electronic-technician placeholder without presenting it as completed work.
- [x] Publish and verify the public GitHub Pages site from `main` / repository root at https://dancelle-angcon.github.io/Dancelle-Portfolio/.

## Latest portfolio update
- [x] Add the supplied professional portrait as `profile-photo.jpg` for the landing page.
- [x] Add the supplied CV as `cv.pdf` and enable its View and Download links.
- [x] Add the Typography Brand Poster to the Projects gallery with a WebP preview and links to the original PNG.
- [x] Replace the Experience page placeholder with the Classroom Acting President experience and responsibilities listed in the CV.
- [x] Update the local README to reflect the supplied CV, portrait, added project, and remaining contact-form limitation.

## Previously completed site outcomes
- [x] Keep the landing-page photo filename instruction removed, with initials fallback; show both education bullets, replace landing Work experience with Project Types, and list the supplied Graphic Designer and Electronic Technician project-type bullets.
- [x] On the full About page, separate BSIT at City College of Calamba (2024–present) and EPAS TESDA at Palo Alto Integrated School (2022–2024) into bullets, include the High Honor Award, and omit Project work and Skills and tools from the biography.
- [x] On Education, remove the Design learning card, show “2022–2024 (With High Honor)” for EPAS, include the four EPAS technical bullet details, and show the supplied BSIT paragraph under BSIT Student with 2024–present dates.
- [x] On Skills, use separate Graphic Design and Electronic Technician skill boxes, matching Tools boxes underneath, then a Soft Skills box; keep the five supplied Graphic Design skills with short descriptions, the Canva/Figma/Photopea/PixelLab list, all supplied Electronic Technician skill details, and the supplied electronics tools.
- [x] Replace certificate placeholders with six supplied certificates, previews, and working View/Download controls.
- [x] Preserve the navy/light-blue/neon-violet design, bold abstract background, one Arial family with multiple styles, and existing multipage layout.

## Activity requirements 17–27
- [x] Use clean public routes for Home, About, Projects, Experience, Contact, and the three supplied project detail pages; update internal links and the route manifest. Supplemental Education, Skills, Certificates, and CV pages retain their working `.html` routes.
- [x] Keep the portfolio publicly available without login on GitHub Pages with HTTPS at the default public URL; custom domain is optional and not configured.
- [x] Add per-page title, description, 3–8 relevant keywords, canonical URL, Open Graph and Twitter metadata; add `robots.txt`, `sitemap.xml`, and a custom 404 page.
- [x] Lazy-load below-the-fold project/certificate imagery, retain optimized WebP previews, and leave full-size originals available for deliberate viewing/download. GitHub Pages controls HTTP cache headers.
- [x] Preserve the static-site security boundary: no frontend secrets or user-file uploads; keep message submission disabled until an owner-approved receiving endpoint is configured; add browser-level form constraints.
- [x] Improve accessibility with a skip link, readable small text, dark-mode text contrast adjustments, labeled controls, descriptive alt text, and visible keyboard focus.
- [x] Add creator identity, professional title, email, LinkedIn, GitHub, copyright, and quick links to every page footer.
- [ ] Contact-form delivery, abuse protection and server-side validation remain pending until the owner supplies/authorizes a receiving service and endpoint.
- [x] Analytics is intentionally not added because it is optional and no provider/property was selected.
- [x] Final local and live cross-device/browser/console smoke checks completed; see the verification details below.


## Final verification
- [x] Public HTTPS URL and all 12 primary and supplemental routes checked after deployment; all returned HTTP 200 and rendered the expected page titles/headings.
- [x] Sitemap contains all 12 pages; robots.txt, custom 404, CV PDF, professional photo, and SEO/social metadata checked live.
- [x] Live desktop/tablet/mobile checks at 1440, 768, and 390 px passed without horizontal overflow; project search/filters and empty state, dark mode, mobile menu, image loading, and CV access passed with no console or failed-request errors.
