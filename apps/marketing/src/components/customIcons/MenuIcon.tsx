export default function MenuIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-menu-icon lucide-menu ${className}`}
    >
      <path d="M4 5h28" />
      <path d="M4 12h28" />
    </svg>
  );
}
