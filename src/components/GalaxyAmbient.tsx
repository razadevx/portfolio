const ambientStars = [
  { left: "10%", top: "16%", size: 2, delay: "0s", duration: "6.5s" },
  { left: "22%", top: "34%", size: 1.5, delay: "1.2s", duration: "7.2s" },
  { left: "36%", top: "22%", size: 2, delay: "2s", duration: "6s" },
  { left: "48%", top: "52%", size: 1.5, delay: "0.8s", duration: "7.4s" },
  { left: "64%", top: "18%", size: 2, delay: "1.8s", duration: "5.8s" },
  { left: "74%", top: "40%", size: 2.5, delay: "2.4s", duration: "7.8s" },
  { left: "82%", top: "70%", size: 2, delay: "0.5s", duration: "6.8s" },
  { left: "16%", top: "78%", size: 2, delay: "2.7s", duration: "7.1s" },
  { left: "58%", top: "84%", size: 1.5, delay: "1.1s", duration: "6.2s" },
];

const GalaxyAmbient = () => {
  return (
    <div className="ambient-field absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />

      {ambientStars.map((star, index) => (
        <span
          key={index}
          className="ambient-star motion-reduce:animate-none"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyAmbient;
