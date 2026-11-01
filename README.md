# Dancelle Angcon — Portfolio

A responsive portfolio presenting Dancelle Reña O. Angcon’s graphic-design projects, electronic-technician background, education, certificates, experience, and downloadable CV.

- **Live portfolio:** https://dancelle-angcon.github.io/Dancelle-Portfolio/
- **Source repository:** https://github.com/Dancelle-Angcon/Dancelle-Portfolio
- **Hosting:** GitHub Pages over HTTPS; the default `github.io` domain is used.

## Preview locally

No build tools or packages are required. From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. On Windows, `py -m http.server 8000` also works. Stop the server with Ctrl+C.

## Publish or update the site

The published site deploys from the repository’s `main` branch and root folder. To make a change, edit or upload the relevant page/assets and commit them to `main`; GitHub Pages starts a deployment automatically. Check the repository’s **Actions** tab for the Pages build, then verify the public URL. If Pages has not been configured in a fresh repository, go to **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, and save. Enable **Enforce HTTPS** when available. No custom domain or DNS record is configured.

The clean page routes are backed by `index.html` files in `about/`, `projects/`, `experience/`, `contact/`, and the individual `projects/<project-name>/` directories. Preserve those folder names and relative asset paths when editing them.

## Content and assets

The `assets/` directory contains the supplied certificate and project artwork, including optimized WebP previews. The full-size originals remain available from the Projects page. The professional portrait is `profile-photo.jpg`; the CV is `cv.pdf`. `TODO.md` records completed activity outcomes and the remaining dependency.

## Contact form status

The contact form opens a pre-filled email draft addressed to `dancelleangcon58@gmail.com`. The sender’s subject, name, reply email, and message are placed in the corresponding email fields. The sender must review and press Send in their email app; the website does not transmit or store the message itself. This requires a configured email app or browser `mailto:` handler and does not provide server-side validation or abuse protection.

## Verification

The published site was checked for the primary and supplemental routes, responsive layouts (mobile, tablet, desktop), image loading, project search/filtering, empty results, dark/light theme, mobile navigation, CV PDF, SEO metadata, `robots.txt`, `sitemap.xml`, and the custom 404 page. The activity checklist is in `TODO.md`.
