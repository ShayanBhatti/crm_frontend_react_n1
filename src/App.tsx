function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-base p-10 space-y-6">
      <h1 className="font-heading text-3xl">CRM Theme Test</h1>

      <div className="bg-surface p-4 rounded-md border border-border">
        <p className="text-text-muted">This is a card</p>
      </div>

      <div className="flex gap-4">
        <button className="bg-primary hover:bg-primary-hover text-text-inverse px-4 py-2 rounded-md">
          Primary
        </button>

        <button className="bg-success text-text-inverse px-4 py-2 rounded-md">
          Success
        </button>

        <button className="bg-error text-text-inverse px-4 py-2 rounded-md">
          Error
        </button>
      </div>
    </div>
  );
}

export default App;
