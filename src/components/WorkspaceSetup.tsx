import { useState } from 'react';
import { PenTool } from 'lucide-react';

export function WorkspaceSetup() {
  const [workspaceName, setWorkspaceName] = useState('');

  const handleContinue = () => {
    if (workspaceName.trim()) {
      console.log('Workspace created:', workspaceName);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 rounded-lg p-12 border border-slate-800">
          <div className="flex justify-center mb-8">
            <PenTool className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
          </div>

          <h1 className="text-xl font-semibold text-center text-white mb-8">
            Name your workspace
          </h1>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-3">
              Workspace name
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="hello"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 text-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              (You can always change it later)
            </p>
          </div>

          <button
            onClick={handleContinue}
            disabled={!workspaceName.trim()}
            className="w-full mt-8 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
