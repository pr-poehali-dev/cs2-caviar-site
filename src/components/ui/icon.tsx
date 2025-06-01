import {
  Home,
  UserPlus,
  Shield,
  Coins,
  ArrowRight,
  ArrowLeft,
  Zap,
  Star,
  Send,
  Download,
  Users,
  Calendar,
  Clock,
  ExternalLink,
  CircleAlert,
  type LucideIcon,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  UserPlus,
  Shield,
  Coins,
  ArrowRight,
  ArrowLeft,
  Zap,
  Star,
  Send,
  Download,
  Users,
  Calendar,
  Clock,
  ExternalLink,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
