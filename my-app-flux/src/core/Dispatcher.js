import Flux from 'flux';
import assign from 'object-assign';

const Dispatcher = assign(new Flux.Dispatcher(), {});

export default Dispatcher;