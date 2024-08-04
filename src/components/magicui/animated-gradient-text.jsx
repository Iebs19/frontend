import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className
}) {
  return (
    (<div
      className={cn(
        "yesgroup yesrelative yesmx-auto yesflex yesmax-w-fit yesflex-row yesitems-center yesjustify-center yesrounded-2xl yesbg-white/40 yespx-4 yespy-1.5 yestext-sm yesfont-medium yesshadow-[inset_0_-8px_10px_#8fdfff1f] yesbackdrop-blur-sm yestransition-shadow yesduration-500 yesease-out [--bg-size:yes300%] hover:yesshadow-[inset_0_-5px_10px_#8fdfff3f] dark:yesbg-black/40",
        className
      )}>
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`} />
      {children}
    </div>)
  );
}
