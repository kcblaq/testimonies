try { require('./src/generated/prisma/enums.js'); console.log('enums.js ok'); } catch(e) { console.error('enums:', e.message); }
try { require('@prisma/client/runtime/client'); console.log('runtime ok'); } catch(e) { console.error('runtime:', e.message); }
