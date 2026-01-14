import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function Expertise({
  nextExpertise,
  wpExpertise
}: {
  nextExpertise: string[];
  wpExpertise: string[];
}) {
  return (
    <div className="mx-4 md:mx-10 mb-8">
      <div>
        <h2 className="flex justify-center text-2xl font-bold mb-2 md:mb-4 col-span-full">
          Our Expertise
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-white shadow-lg px-2 md:px-10 py-4 md:py-6">
          <CardTitle className="text-xl font-semibold mb-0 px-0 mx-2">
            Next.js Expertise
          </CardTitle>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              {nextExpertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg px-2 md:px-10 py-4 md:py-6">
          <CardTitle className="text-xl font-semibold mb-0 px-0 mx-2">
            WordPress Expertise
          </CardTitle>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              {wpExpertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
