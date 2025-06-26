import React from 'react';
import classNames from 'classnames';
import './StatusBadge.css';

function StatusBadge({ status }) {
  const badgeClass = classNames('status-badge', {
    'success': status === 'success',
    'error': status === 'error',
    'warning': status === 'warning',
  });

  return <span className={badgeClass}>{status}</span>;
}

export default StatusBadge;
