"use strict";
// Diablo 3 Community API documentation: https://develop.battle.net/documentation/diablo-3/community-apis
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
class Diablo3Community {
    constructor(axiosInstance, locale) {
        this.gameBaseUrlPath = '/d3/data';
        this.axios = axiosInstance;
        this.locale = locale;
    }
    /****************************
     * Act API
     ****************************/
    getActIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/act`, 'Error fetching the act index.');
        });
    }
    getAct(actId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/act/${actId}`, 'Error fetching the specified act.');
        });
    }
    /****************************
     * Artisan and Recipe API
     ****************************/
    getArtisan(artisanSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/artisan/${artisanSlug}`, 'Error fetching the specified artisan.');
        });
    }
    getRecipe(artisanSlug, recipeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`, 'Error fetching specified recipe.');
        });
    }
    /****************************
     * Follower API
     ****************************/
    getFollower(followerSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/follower/${followerSlug}`, 'Error fetching the specified follower.');
        });
    }
    /****************************
     * Character Class & Skill API
     ****************************/
    getCharacterClass(classSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/hero/${classSlug}`, 'Error fetching specified hero class.');
        });
    }
    getApiSkill(classSlug, skillSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`, 'Error fetching specified hero class skill.');
        });
    }
    /****************************
     * Item Type API
     ****************************/
    getItemTypeIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-type`, 'Error fetching the item type index.');
        });
    }
    getItemType(itemTypeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`, 'Error fetching the specified item type.');
        });
    }
    /****************************
     * Item API
     ****************************/
    getItem(itemSlugAndId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemSlugAndId}`, 'Error fetching the specified item.');
        });
    }
    /****************************
     * Profile API
     ****************************/
    getApiAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/d3/profile/${account}`, 'Error fetching profile information.');
        });
    }
    getApiHero(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/d3/profile/${account}/hero/${heroId}`, 'Error fetching specified hero.');
        });
    }
    getApiDetailedHeroItems(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/d3/profile/${account}/hero/${heroId}/items`, 'Error fetching specified hero items.');
        });
    }
    getApiDetailedFollowerItems(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/d3/profile/${account}/hero/${heroId}/follower-items`, 'Error fetching specified hero follower items.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(apiUrl);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Community Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = Diablo3Community;
