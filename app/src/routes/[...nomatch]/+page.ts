import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    error(
        404,
        { friendly: 'Pagina no encontrada' }
    );
};
