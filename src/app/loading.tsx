import { ProgressSpinner } from "primereact/progressspinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ProgressSpinner
        style={{ width: "100px", height: "100px" }}
        strokeWidth="3"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
}
