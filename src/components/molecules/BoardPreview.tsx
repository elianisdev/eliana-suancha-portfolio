import { Tag } from "@/components/atoms/Tag";
import type { BoardColumn } from "@/types/project";

type BoardPreviewProps = {
  columns: BoardColumn[];
};

export function BoardPreview({ columns }: BoardPreviewProps) {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      {columns.map(({ title, tasks }) => (
        <div
          key={title}
          className="flex min-w-0 flex-col gap-2 rounded-lg border border-line bg-panel p-2"
        >
          <span className="truncate font-mono text-2xs tracking-widest text-muted uppercase">
            {title}
          </span>
          {tasks.map(({ title: taskTitle, reference, review }) => (
            <div
              key={reference}
              className="flex flex-col items-start gap-1.5 rounded-md bg-panel-2 p-2 text-2xs"
            >
              <span>{taskTitle}</span>
              {review && (
                <Tag tone={review.tone} size="compact">
                  {review.label}
                </Tag>
              )}
              <span className="font-mono text-muted">{reference}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
