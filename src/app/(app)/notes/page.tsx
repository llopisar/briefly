import { PageHeader } from "@/components/product/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { notesLibrary } from "@/lib/product-data";

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notes library"
        description="Search and organize summaries, decisions, and transcript highlights."
        actions={
          <>
            <Button variant="secondary" size="sm">
              Saved view: Product
            </Button>
            <Button size="sm">New folder</Button>
          </>
        }
      />
      <Card className="p-4">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2 text-sm text-[var(--color-text-muted)]">
          Search notes by keyword, speaker, project, or decision
        </div>
      </Card>
      <div className="grid gap-4 lg:grid-cols-2">
        {notesLibrary.map((note) => (
          <Card key={note.id} className="p-5">
            <p className="text-sm font-semibold text-[var(--color-text)]">{note.title}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{note.snippet}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-2 py-1 text-xs font-semibold text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
              <span className="ml-auto text-xs text-[var(--color-text-muted)]">{note.updatedAt}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
