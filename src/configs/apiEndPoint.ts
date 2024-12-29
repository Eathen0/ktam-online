const API_DOMAIN = 'http://localhost:5000'
export const apiEndPoint = {
    baseUrl: API_DOMAIN,

    login: `${API_DOMAIN}/auth/login`,
    logout: `${API_DOMAIN}/auth/logout`,
    refreshToken: `${API_DOMAIN}/auth/refresh-token`,

    register: `${API_DOMAIN}/pendaftar/daftar`,
    checkRegisterStatus: `${API_DOMAIN}/pendaftar/cariuser`,
    uploadDocuments: `${API_DOMAIN}/pendaftar/upload`,

    admin_see_registerCount: `${API_DOMAIN}/admin/jumlahPendaftar`,
    admin_see_needVerifyCount: `${API_DOMAIN}/admin/verifikasi`,
    admin_see_allMemberCount: `${API_DOMAIN}/admin/angota`,

    amdin_see_listUnverifiedMeber: `${API_DOMAIN}/admin/datapendaftar`,
    amdin_see_listRequestedVerify: `${API_DOMAIN}/admin/dataverifikasi`,
    admin_see_listVerifiedMember: `${API_DOMAIN}/admin/dataanggota`,

    admin_act_verifyMember: `${API_DOMAIN}/admin/verifikasidata`,
    admin_act_rejectMember: `${API_DOMAIN}/admin/tolakverifikasi`,

    superAdmin_act_editInformations: `${API_DOMAIN}/superadmin/textarea`,
}