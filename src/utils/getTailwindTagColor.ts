export default function getTailwindTagColor(tag: string) {
  switch(tag) {
    case "astro": return "bg-tag-astro/50 hover:bg-tag-astro/70";
    case "docker": return "bg-tag-docker/50 hover:bg-tag-docker/70";
    case "nextjs": return "bg-tag-nextjs/50 hover:bg-tag-nextjs/70";
    case "postgres": return "bg-tag-postgres/50 hover:bg-tag-postgres/70";
    case "tailwindcss": return "bg-tag-tailwindcss/50 hover:bg-tag-tailwindcss/70";
    case "typescript": return "bg-tag-typescript/50 hover:bg-tag-typescript/70";
    default: return "bg-skin-accent/50 hover:bg-skin-accent/70";
  }
}
