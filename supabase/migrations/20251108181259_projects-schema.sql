DROP TABLE IF EXISTS projects;

-- ensure enum is present and matches what's needed
DROP TYPE IF EXISTS current_status;
CREATE TYPE current_status AS ENUM ('in-progress', 'completed');

CREATE TABLE projects(
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp DEFAULT now() NOT NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  status current_status DEFAULT 'in-progress' NOT NULL,
  collaborators text[] DEFAULT ARRAY[]::varchar[] NOT NULL
);