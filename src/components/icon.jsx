import {
  Activity,
  ArrowRight,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  TimerReset,
  X,
} from "lucide-react";

const Icons = {
  stock: Activity,
  timer: TimerReset,
  close: X,
  arrowRight: ArrowRight,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  eye: Eye,
  menu: Menu,
  star: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M31.138 92.311a8.18 8.18 0 0 1-5.753-2.361 8.168 8.168 0 0 1-2.277-7.567l4.011-18.916-14.366-12.946a8.311 8.311 0 0 1-1.548-1.882 7.66 7.66 0 0 1-.6-1.252 7.051 7.051 0 0 1-.297-.883c-.614-2.285-.188-4.759 1.18-6.751a8.18 8.18 0 0 1 5.904-3.509l19.23-2.03 7.875-17.664a8.21 8.21 0 0 1 7.498-4.858c1.017 0 2.015.186 2.967.553a8.133 8.133 0 0 1 4.545 4.312l7.872 17.656 19.232 2.03a8.19 8.19 0 0 1 5.901 3.509 8.222 8.222 0 0 1 1.169 6.793 7.388 7.388 0 0 1-.295.863 7.42 7.42 0 0 1-.597 1.242 8.21 8.21 0 0 1-1.534 1.862L76.882 63.466l4.012 18.917c.179.852.223 1.711.134 2.564a7.445 7.445 0 0 1-.141.831 7.86 7.86 0 0 1-.518 1.633c-.065.146-.16.337-.26.52a8.179 8.179 0 0 1-1.071 1.558l-.146.161a8.335 8.335 0 0 1-1.597 1.34l-.149.094a8.21 8.21 0 0 1-4.301 1.226 8.204 8.204 0 0 1-4.091-1.102L52 81.542l-16.75 9.664a8.055 8.055 0 0 1-1.675.725 6.72 6.72 0 0 1-.642.179 8.014 8.014 0 0 1-1.795.201z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M29.138 90.311a8.18 8.18 0 0 1-5.753-2.361 8.168 8.168 0 0 1-2.277-7.567l4.011-18.916-14.366-12.946a8.311 8.311 0 0 1-1.548-1.882 7.66 7.66 0 0 1-.6-1.252 7.051 7.051 0 0 1-.297-.883c-.614-2.285-.188-4.759 1.18-6.751a8.18 8.18 0 0 1 5.904-3.509l19.23-2.03 7.875-17.664a8.21 8.21 0 0 1 7.498-4.858c1.017 0 2.015.186 2.967.553a8.133 8.133 0 0 1 4.545 4.312l7.872 17.656 19.232 2.03a8.19 8.19 0 0 1 5.901 3.509 8.222 8.222 0 0 1 1.169 6.793 7.388 7.388 0 0 1-.295.863 7.42 7.42 0 0 1-.597 1.242 8.21 8.21 0 0 1-1.534 1.862L74.882 61.466l4.012 18.917c.179.852.223 1.711.134 2.564a7.445 7.445 0 0 1-.141.831 7.86 7.86 0 0 1-.518 1.633c-.065.146-.16.337-.26.52a8.179 8.179 0 0 1-1.071 1.558l-.146.161a8.335 8.335 0 0 1-1.597 1.34l-.149.094a8.21 8.21 0 0 1-4.301 1.226 8.204 8.204 0 0 1-4.091-1.102L50 79.542l-16.75 9.664a8.055 8.055 0 0 1-1.675.725 6.72 6.72 0 0 1-.642.179 8.014 8.014 0 0 1-1.795.201z"
      />
      <path
        fill="#ffe385"
        d="M85.222 43.294c.055-.091.085-.189.121-.286.018-.049.046-.095.059-.145.254-.951-.354-2.035-1.475-2.154l-22.959-2.425-9.401-21.087a1.66 1.66 0 0 0-.943-.887c-.796-.307-1.787-.021-2.191.887l-9.401 21.089-22.959 2.423c-1.123.119-1.73 1.204-1.475 2.155.012.047.039.09.056.136.036.1.068.2.125.294.085.142.192.276.327.398l17.15 15.454-4.79 22.587c-.271 1.277.897 2.302 2.058 2.031.018-.004.035-.016.053-.021a1.72 1.72 0 0 0 .425-.167L50 72.039l19.999 11.536a1.68 1.68 0 0 0 1.767-.045v.001l.003-.002a1.74 1.74 0 0 0 .37-.314l.011-.011a1.71 1.71 0 0 0 .242-.368c.011-.021.026-.039.036-.06.053-.12.084-.25.107-.384.007-.039.024-.074.028-.114a1.747 1.747 0 0 0-.028-.545l-4.79-22.586 17.15-15.454c.135-.123.243-.257.327-.399z"
      />
      <path
        fill="#f9b84f"
        d="m50 50 17.746 9.146 17.041-16.827zM50 16.872V50l10.968-11.716zM50 50l21.511 33.085L50 71.34zM50 50 28.321 83.593l3.933-24.447zM50 50l-35.39-7.766 24.422-3.948z"
      />
      <path
        fill="#40396e"
        d="M29.138 85.311a3.216 3.216 0 0 1-2.253-.932 3.194 3.194 0 0 1-.887-2.958l4.61-21.739-16.507-14.875a3.3 3.3 0 0 1-.609-.74 2.837 2.837 0 0 1-.236-.52 2.173 2.173 0 0 1-.11-.305 3.228 3.228 0 0 1 .464-2.659 3.188 3.188 0 0 1 2.304-1.365l22.1-2.333 9.049-20.298c.695-1.561 2.496-2.294 4.102-1.676a3.17 3.17 0 0 1 1.773 1.677l9.048 20.296 22.1 2.333c.937.1 1.776.598 2.303 1.365.539.784.708 1.757.463 2.669-.022.083-.085.25-.121.327a2.62 2.62 0 0 1-.224.491c-.164.272-.367.52-.604.734l-16.51 14.879 4.61 21.738c.07.333.087.673.052 1.012a2.304 2.304 0 0 1-.054.282 2.99 2.99 0 0 1-.202.668 1.776 1.776 0 0 1-.092.176 3.106 3.106 0 0 1-.429.634l-.055.06a3.29 3.29 0 0 1-.637.535l-.02.013c-1.031.651-2.27.68-3.316.076L50 73.77 30.751 84.875c-.267.153-.519.24-.703.294a1.785 1.785 0 0 1-.2.06 3.114 3.114 0 0 1-.71.082zM16.04 42.428l.024.062.039.108 17.155 15.434c.398.358.575.901.463 1.426l-4.79 22.587c-.013.061-.015.125.053.192.037.036.095.07.157.071a.393.393 0 0 1 .032-.01l20.076-11.56a1.493 1.493 0 0 1 1.499 0l19.999 11.537c.038.021.101.057.215-.014l.001-.002c.015-.016.04-.04.067-.065l.034-.062.002-.012-4.789-22.663a1.5 1.5 0 0 1 .463-1.426l17.15-15.454c0-.002.012-.016.023-.03l.023-.064.02-.051a.251.251 0 0 0-.043-.152c-.034-.049-.076-.072-.146-.08l-22.958-2.424a1.503 1.503 0 0 1-1.212-.882l-9.401-21.087c-.013-.029-.029-.065-.111-.097-.023-.01-.206-.074-.282.097l-9.401 21.089c-.218.489-.68.825-1.213.882L16.23 42.201c-.07.007-.113.03-.146.079a.26.26 0 0 0-.044.148zm55.071 39.484z"
      />
    </svg>
  ),
};

export default function Icon({
  size = 16,
  icon = "",
  iconColor,
  strokeWidth = 2,
}) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
