import {API_BASE, HTTP_LEAGUES} from '../config';
import httpBase from '../http-base';


class HttpTeams {

    async getTeams (config){
        try{
            const url = `${ API_BASE }${HTTP_LEAGUES.getTeams}`;
            const data = await httpBase.baseGet(url,config);
            return data.teams;
        } catch (error) {
            console.warn(error);//TODO
        }
    }
    async getPlayers (config){
        try{
            const url = `${ API_BASE }${HTTP_LEAGUES.getPlayers}`;
            const data = await httpBase.baseGet(url,config);
            return data.player;
        } catch (error) {
            console.warn(error);//TODO
        }
    }

    async getTeamById (config){
        try{
            const url = `${ API_BASE }${HTTP_LEAGUES.getTeamById}`;
            const data = await httpBase.baseGet(url,config);
            return data.teams;
        } catch (error) {
            console.warn(error);//TODO
        }
    }

}

export default new HttpTeams;