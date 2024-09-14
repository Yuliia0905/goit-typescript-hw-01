type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopPick = Pick<AllType, "name" | "color">;
type BottomPick = Pick<AllType, "position" | "weight">;

function compare(top: TopPick, bottom: BottomPick): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
