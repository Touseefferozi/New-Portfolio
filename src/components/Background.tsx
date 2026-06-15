export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div data-scroll /* data-scroll-speed="-2" */ className="bg-orb bg-orb-one" />
      <div data-scroll /* data-scroll-speed="1" */ className="bg-orb bg-orb-two" />
      <div data-scroll /* data-scroll-speed="-1" */ className="bg-orb bg-orb-three" />
      <div className="bg-duotone" />
      <div className="bg-grid" />
      <div className="bg-dots" />
    </div>
  );
}
