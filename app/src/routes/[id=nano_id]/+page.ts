import { room } from '$lib/stores/room';
import { user } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { updateAvailableDecks } from '$lib/stores/config';


export const load: PageLoad = async () => {
    const _room = room.peek;
    if (!_room) {
        redirect(302, '/');
    }

    updateAvailableDecks();
    
    const isHost = user.peek?.id === _room.host.id;

    return {
        isHost: isHost,
    };
};
