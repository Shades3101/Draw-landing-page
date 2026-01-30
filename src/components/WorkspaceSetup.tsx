import { useState } from 'react';
import { PenTool } from 'lucide-react';

const floatKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(5deg); }
  }
  @keyframes shimmer {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

export function WorkspaceSetup() {
  const [workspaceName, setWorkspaceName] = useState('');
  const [focused, setFocused] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <style>{floatKeyframes}</style>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-12 border border-slate-700/50 shadow-2xl">
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{animation: 'shimmer 2s ease-in-out infinite'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full filter blur-2xl" style={{width: '100px', height: '100px', top: '-42px', left: '-42px'}}></div>
              </div>
              <PenTool className="w-16 h-16 text-cyan-400 relative" strokeWidth={1.5} style={{animation: 'float 3s ease-in-out infinite'}} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-white mb-2 tracking-tight">
            Name your workspace
          </h1>
          <p className="text-center text-slate-400 text-sm mb-10">
            Start your creative journey
          </p>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-3 uppercase tracking-widest">
              Workspace name
            </label>
            <div className={`relative transition-all duration-300 ${focused ? 'scale-105' : ''}`}>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="hello"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-700 transition-all duration-300 text-sm font-medium"
              />
              {focused && (
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg -z-10 blur-sm"></div>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              You can always change it later
            </p>
          </div>

          <button
            onClick={handleContinue}
            disabled={!workspaceName.trim()}
            className="w-full mt-10 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none text-sm"
          >
            Continue
          </button>
        </div>

        <div className="mt-8 text-center text-slate-500 text-xs">
          <p>Powered by your creativity</p>
        </div>
      </div>
    </div>
  );
}
