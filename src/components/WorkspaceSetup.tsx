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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
              <PenTool className="w-8 h-8 text-slate-900" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-white mb-8">
            Name your workspace
          </h1>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Workspace name
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="hello"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
            <p className="text-xs text-slate-500 mt-2">
              (You can always change it later)
            </p>
          </div>

          <button
            onClick={handleContinue}
            disabled={!workspaceName.trim()}
            className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
