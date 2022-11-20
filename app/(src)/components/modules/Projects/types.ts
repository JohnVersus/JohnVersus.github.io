export interface ProjectOwner {
  avatar_url: URL;
  events_url: URL;
  followers_url: URL;
  following_url: URL;
  gists_url: URL;
  gravatar_id: String;
  html_url: URL;
  id: Number;
  login: String;
  node_id: String;
  organizations_url: URL;
  received_events_url: URL;
  repos_url: URL;
  site_admin: false;
  starred_url: URL;
  subscriptions_url: URL;
  type: String;
  url: URL;
}

export interface Project {
  allow_forking: boolean;
  archive_url: URL;
  archived: false;
  assignees_url: URL;
  blobs_url: URL;
  branches_url: URL;
  clone_url: URL;
  collaborators_url: URL;
  comments_url: URL;
  commits_url: URL;
  compare_url: URL;
  contents_url: URL;
  contributors_url: URL;
  created_at: String;
  default_branch: String;
  deployments_url: URL;
  description: String;
  disabled: false;
  downloads_url: URL;
  events_url: URL;
  fork: false;
  forks: Number;
  forks_count: Number;
  forks_url: URL;
  full_name: URL;
  git_commits_url: URL;
  git_refs_url: URL;
  git_tags_url: URL;
  git_url: URL;
  has_downloads: true;
  has_issues: true;
  has_pages: false;
  has_projects: true;
  has_wiki: true;
  homepage: null;
  hooks_url: URL;
  html_url: URL;
  id: Number;
  is_template: false;
  issue_comment_url: URL;
  issue_events_url: URL;
  issues_url: URL;
  keys_url: URL;
  labels_url: URL;
  language: String;
  languages_url: URL;
  license: null;
  merges_url: URL;
  milestones_url: URL;
  mirror_url: null;
  name: String;
  node_id: String;
  notifications_url: URL;
  open_issues: Number;
  open_issues_count: Number;
  owner: ProjectOwner;
  private: false;
  pulls_url: URL;
  pushed_at: String;
  releases_url: URL;
  size: Number;
  ssh_url: URL;
  stargazers_count: Number;
  stargazers_url: URL;
  statuses_url: URL;
  subscribers_url: URL;
  subscription_url: URL;
  svn_url: URL;
  tags_url: URL;
  teams_url: URL;
  topics: [];
  trees_url: URL;
  updated_at: String;
  url: URL;
  visibility: String;
  watchers: Number;
  watchers_count: Number;
  web_commit_signoff_required: boolean;
}

export interface IProjectCard {
  name: String;
  description: String;
  languages: URL;
  repoUrl: URL;
  filter: Array<string>;
}
