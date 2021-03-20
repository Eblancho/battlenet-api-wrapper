"use strict";
// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WowCommunity {
    constructor(axiosInstance, defaultAxiosParams, origin) {
        this.gameBaseUrlPath = '/wow';
        this.gameDataBaseUrlPath = '/data/wow';
        this.gameProfilBaseUrlPath = '/profile/wow';
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.namespace = `profile-${origin}`;
    }
    /****************************
     * Achievement API
     ****************************/
    /**
     * Returns data about an individual achievement.
     *
     * @param achievementId The ID of the achievement to retrieve.
     */
    getAchievement(achievementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameDataBaseUrlPath}/achievement/${achievementId}`, 'Error fetching specified achievement.');
        });
    }
    /****************************
     * Boss API
     ****************************/
    /**
     * Returns a list of all supported bosses. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     */
    getBossMasterList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameDataBaseUrlPath}/journal-encounter/index`, 'Error fetching master boss list.');
        });
    }
    /**
     * Returns information about the specified boss. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     *
     * @param bossId The ID of the boss to retrieve.
     */
    getBoss(bossId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameDataBaseUrlPath}/journal-encounter/${bossId}`, 'Error fetching specified boss.');
        });
    }
    /****************************
     * Challenge Mode API
     ****************************/
    /**
     * The request returns data for all nine challenge mode maps (currently). The map field includes the current medal
     * times for each dungeon. Each ladder provides data about each character that was part of each run. The
     * character data includes the current cached specialization of the character while the member field includes the
     * specialization of the character during the challenge mode run.
     *
     * @param realmSlug The realm to request.
     */
    getChallengeModeRealmLeaderboard(realmSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/challenge/${realmSlug}`, '#TODO CHALLENGE MODE REALM LEADERBOARD NOT SUPPORTED IN THIS VERSION');
        });
    }
    /**
     * The region leaderboard has the exact same data format as the realm leaderboards except there is no `realm` field.
     * Instead, the response has the top 100 results gathered for each map for all of the available realm leaderboards
     * in a region.
     */
    getChallengeModeRegionLeaderboard() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/challenge/region`, 'CHALLENGE REGION LEADERBOARD DEPRECATED BY BATTLE.NET');
        });
    }
    /****************************
     * Character Profile API
     ****************************/
    /**
     * Returns a character profile.  In order to get additional fields, you have to specify them in the fields parameter
     * as comma-delimited list.
     *
     * Your options for the fields are:
     *
     * achievements, appearance, feed, guild, hunterPets, items, mounts, pets, petSlots, professions, progression,
     * pvp, quests, reputation, statistics, stats, talents, titles, audit.
     *
     * @param realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
     * @param characterName The name of the character to retrieve.
     * @param fields Specifies the data to retrieve.
     */
    getCharacterProfile(realm, characterName, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameProfilBaseUrlPath}/character/${realm}/${characterName}`, 'WoW Community Error :: Error fetching character profile.');
        });
    }
    /****************************
     * Guild API
     ****************************/
    /**
     * Returns a guild profile.  In order to get additional fields, you have to specify them in the fields parameter
     * as comma-delimited list.
     *
     * Your options for the fields are:
     *
     * achievements, challenges, members, news
     *
     * @param realm The guild's realm.
     * @param guildName The name of the guild to query.
     * @param fields The optional data to retrieve about the guild.
     */
    getGuildProfile(realm, guildName, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameDataBaseUrlPath}/guild/${realm}/${guildName}/roster`), {
                    params: Object.assign({ namespace: this.namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Community Error :: Error fetching guild profile.`);
            }
        });
    }
    /****************************
     * Item API
     ****************************/
    /**
     * Returns detailed information about the item.
     *
     * @param itemId The requested item's unique ID.
     */
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.');
        });
    }
    /**
     * Returns detailed information about the item set.
     *
     * @param setId The requested set's unique ID.
     */
    getItemSet(setId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/set/${setId}`, 'Error fetching specified item set.');
        });
    }
    /****************************
     * Mount API
     ****************************/
    /**
     * Returns a list of all supported mounts.
     */
    getMountMasterList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mount`, 'Error fetching mount master list');
        });
    }
    /****************************
     * Pet API
     ****************************/
    /**
     * Returns a list of all supported battle and vanity pets.
     */
    getPetMasterList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet`, 'Error fetching pet master list.');
        });
    }
    /**
     * Returns data about a individual battle pet ability ID. This resource does not provide ability tooltips.
     *
     * @param abilityId The ID of the ability to retrieve.
     */
    getPetAbilities(abilityId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/ability/${abilityId}`, 'Error fetching specified pet abilities.');
        });
    }
    /**
     * Returns data about an individual pet species. Use pets as the `field` value in a
     * character profile request to get species IDs. Each species also has data about its six abilities.
     *
     * @param speciesId
     */
    getPetSpecies(speciesId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/species/${speciesId}`, 'Error fetching specified pet species.');
        });
    }
    /**
     * Returns detailed information about a given species of pet.
     *
     * @param speciesId The pet's species ID. This can be found by querying a user's list of pets via the Character Profile API.
     * @param level The pet's level. Pet levels max out at 25. If omitted, the API assumes a default value of 1.
     * @param breedId The pet's breed. Retrievable via the Character Profile API. If omitted the API assumes a default value of 3.
     * @param qualityId The pet's quality. Retrievable via the Character Profile API. Pet quality can range from 0 to 5
     * (0 is poor quality and 5 is legendary). If omitted, the API will assume a default value of 1.
     */
    getPetStats(speciesId, level = 1, breedId = 3, qualityId = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/pet/stats/${speciesId}`), {
                    params: Object.assign({ level: level, breedId: breedId, qualityId: qualityId }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Community Error :: Error fetching specified pet stats.`);
            }
        });
    }
    /****************************
     * PvP Leaderboard API
     ****************************/
    /**
     * Returns leaderboard information for the 2v2, 3v3, 5v5, and Rated Battleground leaderboards.
     *
     * @param bracket The type of leaderboard to retrieve. Valid entries are `2v2`, `3v3`, `5v5`, and `rbg`.
     */
    getPvpLeaderboards(bracket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/leaderboard/${bracket}`, 'Error fetching specified bracket leaderboard.');
        });
    }
    /****************************
     * Quest API
     ****************************/
    /**
     * Returns metadata for a specified quest.
     *
     * @param questId The ID of the quest to retrieve.
     */
    getQuest(questId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/quest/${questId}`, 'Error fetching specified quest.');
        });
    }
    /****************************
     * Realm Status API
     ****************************/
    /**
     * Retrieves realm status information. This information is limited to whether or not the realm is up, the type
     * and state of the realm, and the current population.
     */
    getRealmStatusList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/realm/status`, 'Error fetching realm status list.');
        });
    }
    /****************************
     * Recipe API
     ****************************/
    /**
     * Returns basic recipe information.
     *
     * @param recipeId Unique ID for the desired recipe.
     */
    getRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/recipe/${recipeId}`, 'Error fetching specified recipe.');
        });
    }
    /****************************
     * Spell API
     ****************************/
    /**
     * Returns information about spells.
     *
     * @param spellId The ID of the spell to retrieve.
     */
    getSpell(spellId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/spell/${spellId}`, 'Error fetching specified spell.');
        });
    }
    /****************************
     * Zone API
     ****************************/
    /**
     * Returns a list of all supported zones and their bosses. A "zone" in this context should be considered a
     * dungeon or a raid, not a world zone. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     */
    getZoneMasterList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/zone`, 'Error fetching zone master list.');
        });
    }
    /**
     * Returns information about zones.
     *
     * @param zoneId The ID of the zone to retrieve.
     */
    getZone(zoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/zone`, 'Error fetching specified zone.');
        });
    }
    /****************************
     * Data Resources
     ****************************/
    /**
     * Returns a list of battlegroups for the specified region.
     */
    getBattlegroups() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/battleground/`, 'Error fetching region battlegrounds.');
        });
    }
    /**
     * Returns a list of races and their associated faction, name, unique ID, and skin.
     */
    getCharacterRaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/character/races`, 'Error fetching character race list.');
        });
    }
    /**
     * Returns a list of character classes.
     */
    getCharacterClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/character/classes`, 'Error fetching character class list.');
        });
    }
    /**
     * Returns a list of all achievements that characters can earn as well as the category structure and hierarchy.
     */
    getCharacterAchievements() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/character/achievements`, 'Error fetching character achievement list.');
        });
    }
    /**
     * The guild rewards data API provides a list of all guild rewards.
     */
    getGuildRewards() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/guild/rewards`, 'Error fetching guild reward list.');
        });
    }
    /**
     * Returns a list of all guild perks.
     */
    getGuildPerks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/guild/perks`, 'Error fetching guild perk list.');
        });
    }
    /**
     * Returns a list of all guild achievements as well as the category structure and hierarchy.
     */
    getGuildAchievements() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/guild/achievements`, 'Error fetching guild achievement list.');
        });
    }
    /**
     * Returns a list of item classes.
     */
    getItemClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/item/classes`, 'Error fetching item classes.');
        });
    }
    /**
     * Returns a list of talents, specs, and glyphs for each class.
     */
    getTalents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/talents`, 'Error fetching talent list.');
        });
    }
    /**
     * Returns a list of the different battle pet types, including what they are strong and weak against.
     */
    getPetTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/data/pet/types`, 'Error fetching pet type list.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl), {
                    params: Object.assign({ namespace: this.namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Community Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowCommunity;
