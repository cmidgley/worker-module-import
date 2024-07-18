import Worker from 'worker'

export async function startWorker() {
    trace('in startWorker - importing "./worker.js"\n');
    const importedWorker = await import('./worker.js');
    trace('import done; starting worker\n');
    const worker = new Worker('./worker.js');
    trace('worker started\n');
}