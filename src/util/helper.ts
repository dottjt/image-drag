export const generateOptionType = (value: string, label: string) => ({
  value,
  label,
});

export const generateInputAnnotations = (annotations: Util.Annotation[]) => (
  annotations.map((annotation: Util.Annotation) => {
    const pokemon_id = annotation.pokemon && annotation.pokemon.id;
    const human_id = annotation.human && annotation.human.id;

    return {
      pokemon_id: pokemon_id || undefined,
      human_id: human_id || undefined,

      name: annotation.name,
      type: annotation.type,
      stroke: annotation.stroke,
      key: annotation.key,
      x: annotation.x,
      y: annotation.y,
      width: annotation.width,
      height: annotation.height,
    }
  })
);
