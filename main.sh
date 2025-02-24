# Create the main directories
mkdir -p app/about
mkdir -p app/blog
mkdir -p app/contact
mkdir -p app/faq
mkdir -p app/feedback
mkdir -p app/partners
mkdir -p app/product
mkdir -p app/software
mkdir -p app/specifications
mkdir -p blog
mkdir -p components
mkdir -p contexts

# Create subdirectories and files within app
touch app/about/page.tsx
mkdir -p app/blog/1
touch app/blog/1/page.tsx
mkdir -p app/blog/4
touch app/blog/4/page.tsx
mkdir -p app/blog/5
touch app/blog/5/page.tsx
touch app/blog/blog.tsx
touch app/blog/page.tsx
touch app/contact/page.tsx
touch app/faq/page.tsx
touch app/feedback/feedback.tsx
touch app/feedback/page.tsx
touch app/partners/partners.tsx
touch app/product/page.tsx
touch app/software/page.tsx
touch app/specifications/page.tsx
touch app/specifications/layout.tsx

# Create files within other directories
touch blog/blog.tsx
touch components/site-footer.tsx
touch components/site-header.tsx
touch contexts/LanguageContext.tsx
