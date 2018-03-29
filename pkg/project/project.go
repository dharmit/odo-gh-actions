package project

import (
	"github.com/pkg/errors"
	"github.com/redhat-developer/ocdev/pkg/occlient"
)

// ApplicationInfo holds information about one project
type ProjectInfo struct {
	// Name of the project
	Name string
	// is this project active?
	Active bool
}

func GetCurrent(client *occlient.Client) (string, error) {
	// TODO: use project abstaction
	project := client.GetCurrentProjectName()

	return project, nil
}

func SetCurrent(client *occlient.Client, project string) error {
	err := client.SetCurrentProject(project)
	if err != nil {
		return errors.Wrap(err, "unable to set current project to"+project)
	}
	return nil
}

func CreateProject(client *occlient.Client, projectName string) error {
	err := client.CreateNewProject(projectName)
	if err != nil {
		return errors.Wrap(err, "unable to create new project")
	}
	return nil
}

func ListProjects(client *occlient.Client) ([]ProjectInfo, error) {
	currentProject := client.GetCurrentProjectName()
	allProjects, err := client.GetProjectNames()
	if err != nil {
		return nil, errors.Wrap(err, "cannot get all the projects")
	}
	projects := []ProjectInfo{}
	for _, project := range allProjects {
		isActive := false
		if project == currentProject {
			isActive = true
		}
		projects = append(projects, ProjectInfo{
			Name:   project,
			Active: isActive,
		})
	}
	return projects, nil
}
