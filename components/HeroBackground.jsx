// Fixed, ultra-minimal geometric grid behind all content. Purely decorative.

export default function HeroBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#F6F6EF]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
}
