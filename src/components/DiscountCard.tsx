import { Card, CardContent } from "@/components/ui/card";

interface DiscountCardProps {
  icon: string;
  title: string;
  description: string;
  discount: string;
}

export const DiscountCard = ({ icon, title, description, discount }: DiscountCardProps) => {
  return (
    <Card className="bg-gradient-mountain border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-accent text-lg">{title}</h3>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                {discount}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};