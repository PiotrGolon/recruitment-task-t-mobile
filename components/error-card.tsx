import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ErrorCardProps {
  message: string;
}

/**
 * A component that displays an error message in the form of a card..
 */
export const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-200 h-full flex flex-col justify-between bg-red-100 border border-red-400">
      <CardHeader>
        <CardTitle className="text-red-600">Error</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Error message display */}
        <p className="text-red-600">{message}</p>{" "}
      </CardContent>
    </Card>
  );
};
