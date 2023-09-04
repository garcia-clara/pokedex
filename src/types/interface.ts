export interface PkmProps {
   types: Array<{ type: { name: string; url: string } }>;
   id: number;
   name: string;
   sprites: {
      other: {
         "official-artwork": {
            front_default: string;
         };
      };
   };
   stats: Array<{
      base_stat: number;
      stat: {
         name: string;
      };
   }>;
}

export interface PkmSpecies {
   flavor_text_entries: Array<{ flavor_text: string }>;
   genera: Array<{ genus: string }>;
}
