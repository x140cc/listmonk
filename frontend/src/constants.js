export const DateFormat = "ddd D MMM YYYY, hh:MM A"

// Data types.
export const ModelUsers = "users"
export const ModelSubscribers = "subscribers"
export const ModelSubscribersByList = "subscribersByList"
export const ModelLists = "lists"
export const ModelMedia = "media"
export const ModelCampaigns = "campaigns"
export const ModelTemplates = "templates"

// HTTP methods.
export const MethodGet = "get"
export const MethodPost = "post"
export const MethodPut = "put"
export const MethodDelete = "delete"

// Data loading states.
export const StatePending = "pending"
export const StateDone = "done"

// Form types.
export const FormCreate = "create"
export const FormEdit = "edit"

// Message types.
export const MsgSuccess = "success"
export const MsgWarning = "warning"
export const MsgError = "error"
export const MsgPosition = "bottomRight"

// Model specific.
export const CampaignStatusColors = {
  draft: "",
  scheduled: "purple",
  running: "blue",
  paused: "orange",
  finished: "green",
  cancelled: "red"
}

export const CampaignStatusDraft = "draft"
export const CampaignStatusScheduled = "scheduled"
export const CampaignStatusRunning = "running"
export const CampaignStatusPaused = "paused"
export const CampaignStatusFinished = "finished"
export const CampaignStatusCancelled = "cancelled"

export const SubscriptionStatusConfirmed = "confirmed"
export const SubscriptionStatusUnConfirmed = "unconfirmed"
export const SubscriptionStatusUnsubscribed = "unsubscribed"

export const ListOptinSingle = "single"
export const ListOptinDouble = "double"

// API routes.
export const Routes = {
  GetDashboarcStats: "/api/dashboard/stats",
  GetUsers: "/api/users",

  // Lists.
  GetLists: "/api/lists",
  CreateList: "/api/lists",
  UpdateList: "/api/lists/:id",
  DeleteList: "/api/lists/:id",

  // Subscribers.
  ViewSubscribers: "/subscribers",
  GetSubscribers: "/api/subscribers",
  GetSubscriber: "/api/subscribers/:id",
  GetSubscribersByList: "/api/subscribers/lists/:listID",
  PreviewCampaign: "/api/campaigns/:id/preview",
  CreateSubscriber: "/api/subscribers",
  UpdateSubscriber: "/api/subscribers/:id",
  DeleteSubscriber: "/api/subscribers/:id",
  DeleteSubscribers: "/api/subscribers",
  BlacklistSubscriber: "/api/subscribers/:id/blacklist",
  BlacklistSubscribers: "/api/subscribers/blacklist",
  AddSubscriberToLists: "/api/subscribers/lists/:id",
  AddSubscribersToLists: "/api/subscribers/lists",
  DeleteSubscribersByQuery: "/api/subscribers/query/delete",
  BlacklistSubscribersByQuery: "/api/subscribers/query/blacklist",
  AddSubscribersToListsByQuery: "/api/subscribers/query/lists",

  // Campaigns.
  ViewCampaigns: "/campaigns",
  ViewCampaign: "/campaigns/:id",
  GetCampaignMessengers: "/api/campaigns/messengers",
  GetCampaigns: "/api/campaigns",
  GetCampaign: "/api/campaigns/:id",
  GetRunningCampaignStats: "/api/campaigns/running/stats",
  CreateCampaign: "/api/campaigns",
  TestCampaign: "/api/campaigns/:id/test",
  UpdateCampaign: "/api/campaigns/:id",
  UpdateCampaignStatus: "/api/campaigns/:id/status",
  DeleteCampaign: "/api/campaigns/:id",

  // Media.
  GetMedia: "/api/media",
  AddMedia: "/api/media",
  DeleteMedia: "/api/media/:id",

  // Templates.
  GetTemplates: "/api/templates",
  PreviewTemplate: "/api/templates/:id/preview",
  PreviewNewTemplate: "/api/templates/preview",
  CreateTemplate: "/api/templates",
  UpdateTemplate: "/api/templates/:id",
  SetDefaultTemplate: "/api/templates/:id/default",
  DeleteTemplate: "/api/templates/:id",

  // Import.
  UploadRouteImport: "/api/import/subscribers",
  GetRouteImportStats: "/api/import/subscribers",
  GetRouteImportLogs: "/api/import/subscribers/logs"
}
