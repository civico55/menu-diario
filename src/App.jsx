
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const settimana = [
  "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"
];

const menu = [/* ...contenuto semplificato per lo zip... */];

export default function DietaDario() {
  const [oggi, setOggi] = useState(0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍽️ Menù Diario - Dario</h1>
      <Tabs value={oggi.toString()} onValueChange={(val) => setOggi(Number(val))}>
        <TabsList className="flex flex-wrap mb-4">
          {settimana.map((giorno, i) => (
            <TabsTrigger key={i} value={i.toString()}>{giorno}</TabsTrigger>
          ))}
        </TabsList>
        {menu.map((day, i) => (
          <TabsContent value={i.toString()} key={i}>
            <ScrollArea className="h-[65vh]">
              {Object.entries(day).map(([pasto, descrizione]) => (
                <Card key={pasto} className="mb-4">
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold capitalize">{pasto}</h2>
                    <p>{descrizione}</p>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-6 text-sm text-gray-500">Versione base. Aggiungiamo lista spesa e ricette appena vuoi 😉</div>
    </div>
  );
}
