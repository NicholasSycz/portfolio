import React from 'react';
import ReactDOM from 'react-dom';

type LegalType = 'privacy' | 'terms' | 'status';

const contentMap: Record<LegalType, { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This is a minimal privacy policy placeholder. Replace with your full privacy policy content before publishing.',
  },
  terms: {
    title: 'Terms of Service',
    body: 'This is a placeholder for Terms of Service. Provide your full terms as appropriate for your site.',
  },
  status: {
    title: 'Status',
    body: 'Status information and uptime details can be placed here. For production sites consider linking to an external status page.',
  },
};

interface Props {
  type: LegalType;
  onClose: () => void;
}

const LegalModal: React.FC<Props> = ({ type, onClose }) => {
  const { title, body } = contentMap[type];

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-slate-900 w-[90%] max-w-2xl p-8 rounded-2xl border border-white/5 shadow-2xl z-50">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-slate-400 mb-6">{body}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">Close</button>
        </div>
        <div className="mt-4 text-slate-300 text-sm">
          <p>This is sample content. Add detailed legal text or link out to hosted documents as needed.</p>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return null;
  return ReactDOM.createPortal(modal, document.body);
};

export default LegalModal;
