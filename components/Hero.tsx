'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10">
        <iframe 
          src='https://my.spline.design/thresholddarkambientui-X05mrqxCWADn0EKRlMCafkcU/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060f]/20 z-20 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#D8ECF8]/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#D8ECF8]/40 rounded-full animate-float-slow"></div>
      </div>
    </section>
  );
}