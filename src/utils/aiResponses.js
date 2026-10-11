import { HOME_STATS, MY_COURSES } from '../data/content.js';

export const getAiResponse = (question) => {
  const q = question.toLowerCase();
  if (q.includes('percentage') || q.includes('overall')) {
    return `Your overall attendance is ${HOME_STATS.overall.percent}% — you've attended ${HOME_STATS.attended.value} of ${HOME_STATS.attended.total} classes this semester. ${HOME_STATS.overall.sublabel}`;
  }
  if (q.includes('worst') || q.includes('lowest') || q.includes('attention')) {
    const worst = [...MY_COURSES].sort((a, b) => a.percent - b.percent)[0];
    return `You're doing weakest in ${worst.name} (${worst.code}) at ${worst.percent}% attendance. A couple more sessions there would bring your average up nicely.`;
  }
  if (q.includes('best') || q.includes('highest')) {
    const best = [...MY_COURSES].sort((a, b) => b.percent - a.percent)[0];
    return `Your strongest course is ${best.name} (${best.code}) at ${best.percent}% attendance. Great consistency there!`;
  }
  if (q.includes('reject')) {
    return "Attendance is usually rejected for one of two reasons: you were outside the classroom's GPS radius, or the QR code had already expired for that session. Check the Scan QR Code page's location panel next time to confirm you're in range first.";
  }
  if (q.includes('trend')) {
    return 'Your attendance has trended upward over the last few weeks — check the Analytics page for the full week-by-week chart.';
  }
  if (q.includes('mark') || q.includes('scan') || q.includes('how do i')) {
    return "Open Scan QR Code from the sidebar, point your camera at the code your lecturer displays, and stay in the classroom until you see the green 'Attendance Recorded' confirmation.";
  }
  if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
    return `Hey! I'm AttendFlow AI. You're at ${HOME_STATS.overall.percent}% attendance overall — ask me about a specific course, your trend, or how scanning works.`;
  }
  return "I can help with attendance percentages, course performance, and how scanning works. Try asking something like \"What's my attendance percentage?\"";
};
