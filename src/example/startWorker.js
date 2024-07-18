import Worker from 'worker'

export async function startWorker() {
    // this will successfully import the module, showing that the path itself is correct
    trace('in startWorker - importing "./worker.js"\n');
    const importedWorker = await import('./worker.js');

    // this will fail to import the module (with or without prior importing of the module, as above)
    trace('import done; starting worker\n');
    const worker = new Worker('./worker.js');

    trace('worker started\n');
}